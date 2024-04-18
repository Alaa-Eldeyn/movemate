import { z } from "zod";

const movingSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required." })
    .max(50, { message: "First Name is too long." }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required." })
    .max(50, { message: "Last Name is too long." }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  email: z
    .string()
    .min(1, { message: "Your email is required" })
    .email({ message: "Invalid Email" }),
  movingLocation: z.string().min(1, { message: "Moving location is required" }),
  placeOfEntry: z.string().min(1, { message: "Place of entry is required" }),
  movingFloor: z
    .string()
    .min(1, { message: "Moving location floor is required" }),
  moveInFloor: z
    .string()
    .min(1, { message: "Move-in location floor is required" }),
  numberOfRooms: z.string().min(1, { message: "Number of rooms is required" }),
  movingDate: z.string().min(1, { message: "Moving date is required" }),
  notes: z.string().max(500, { message: "Notes is too long." }).min(0),
});
type IMoving = z.infer<typeof movingSchema>;

const cleaningSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required." })
    .max(50, { message: "First Name is too long." }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required." })
    .max(50, { message: "Last Name is too long." }),
  email: z
    .string()
    .min(1, { message: "Your email is required" })
    .email({ message: "Invalid Email" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  floor: z.string().min(1, { message: "Floor is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  numberOfRooms: z.string().min(1, { message: "Number of rooms is required" }),
  cleaningDate: z.string().min(1, { message: "Cleaning date is required" }),
  notes: z.string().max(500, { message: "Notes is too long." }).min(0),
});
type ICleaning = z.infer<typeof cleaningSchema>;

const paintingSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required." })
    .max(50, { message: "First Name is too long." }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required." })
    .max(50, { message: "Last Name is too long." }),
  email: z
    .string()
    .min(1, { message: "Your email is required" })
    .email({ message: "Invalid Email" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  floor: z.string().min(1, { message: "Floor is required" }),
  numberOfRooms: z.string().min(1, { message: "Number of rooms is required" }),
  notes: z.string().max(500, { message: "Notes is too long." }).min(0),
});
type IPainting = z.infer<typeof paintingSchema>;

const furnitureSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required." })
    .max(50, { message: "First Name is too long." }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required." })
    .max(50, { message: "Last Name is too long." }),
  email: z
    .string()
    .min(1, { message: "Your email is required" })
    .email({ message: "Invalid Email" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  notes: z.string().max(500, { message: "Notes is too long." }).min(0),
});
type IFurniture = z.infer<typeof furnitureSchema>;

const disposalSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required." })
    .max(50, { message: "First Name is too long." }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required." })
    .max(50, { message: "Last Name is too long." }),
  email: z
    .string()
    .min(1, { message: "Your email is required" })
    .email({ message: "Invalid Email" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  floor: z.string().min(1, { message: "Floor is required" }),
  numberOfRooms: z.string().min(1, { message: "Number of rooms is required" }),
  disposalDate: z.string().min(1, { message: "Disposal date is required" }),
  notes: z.string().max(500, { message: "Notes is too long." }).min(0),
});
type IDisposal = z.infer<typeof disposalSchema>;

export {
  movingSchema,
  cleaningSchema,
  paintingSchema,
  furnitureSchema,
  disposalSchema,
};
export type { IMoving, ICleaning, IPainting, IFurniture, IDisposal };
