import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  insertApplication: vi.fn().mockResolvedValue(undefined),
}));

// Mock the notifyAdmins module
vi.mock("./notifyAdmins", () => ({
  notifyAdmins: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("application.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("accepts a valid application with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.application.submit({
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "+1 555 123 4567",
      linkedinUrl: "https://linkedin.com/in/janedoe",
      founderType: "exited_founder",
      additionalNotes: "Building an AI startup",
    });

    expect(result).toEqual({ success: true });

    const { insertApplication } = await import("./db");
    expect(insertApplication).toHaveBeenCalledOnce();
    expect(insertApplication).toHaveBeenCalledWith({
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "+1 555 123 4567",
      linkedinUrl: "https://linkedin.com/in/janedoe",
      founderType: "exited_founder",
      additionalNotes: "Building an AI startup",
    });
  });

  it("accepts a valid application with only required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.application.submit({
      fullName: "John Smith",
      email: "john@example.com",
      founderType: "pef_member",
    });

    expect(result).toEqual({ success: true });

    const { insertApplication } = await import("./db");
    expect(insertApplication).toHaveBeenCalledOnce();
    expect(insertApplication).toHaveBeenCalledWith({
      fullName: "John Smith",
      email: "john@example.com",
      phone: null,
      linkedinUrl: null,
      founderType: "pef_member",
      additionalNotes: null,
    });
  });

  it("sends admin notifications on successful submission", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await caller.application.submit({
      fullName: "Alice Builder",
      email: "alice@example.com",
      founderType: "technical_founder",
    });

    const { notifyAdmins } = await import("./notifyAdmins");
    expect(notifyAdmins).toHaveBeenCalledOnce();
    expect(notifyAdmins).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New Vibe House Application: Alice Builder",
      })
    );
  });

  it("still succeeds even if admin notification fails", async () => {
    const { notifyAdmins } = await import("./notifyAdmins");
    (notifyAdmins as any).mockRejectedValueOnce(
      new Error("Notification failed")
    );

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.application.submit({
      fullName: "Test User",
      email: "test@example.com",
      founderType: "other",
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects submission with missing full name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.application.submit({
        fullName: "",
        email: "test@example.com",
        founderType: "exited_founder",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.application.submit({
        fullName: "Test User",
        email: "not-an-email",
        founderType: "exited_founder",
      })
    ).rejects.toThrow();
  });

  it("rejects submission with invalid founder type", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.application.submit({
        fullName: "Test User",
        email: "test@example.com",
        founderType: "invalid_type" as any,
      })
    ).rejects.toThrow();
  });

  it("accepts empty string for linkedinUrl", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.application.submit({
      fullName: "Test User",
      email: "test@example.com",
      founderType: "superfounders_member",
      linkedinUrl: "",
    });

    expect(result).toEqual({ success: true });
  });
});
