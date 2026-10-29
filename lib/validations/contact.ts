import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().optional(),
});

export const consultationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  businessType: z.string().min(1, "Business type is required"),
  budget: z.string().min(1, "Budget is required"),
  projectDetails: z.string().min(20, "Please provide more details (min 20 characters)"),
  preferredDate: z.string().optional(),
});

export const requirementSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(20, "Description must be at least 20 characters"),
  budget: z.string().min(1, "Budget is required"),
  timeline: z.string().min(1, "Timeline is required"),
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name is required"),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ConsultationInput = z.infer<typeof consultationSchema>;
export type RequirementInput = z.infer<typeof requirementSchema>;
