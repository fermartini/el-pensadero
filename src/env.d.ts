/// <reference path="../.astro/types.d.ts" />

/// <reference types="astro/client" />

// Añade esto para resolver el error
declare module 'astro:redirect' {
  export const Redirect: {
    redirect(url: string | URL, status?: number): Response;
  };
}