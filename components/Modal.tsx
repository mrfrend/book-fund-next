"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogOverlay } from "@radix-ui/react-dialog";
import React from "react";
export function Modal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog open={true} defaultOpen={true} onOpenChange={() => history.back()}>
      <DialogOverlay>
        <DialogContent className="overflow-y-hidden min-w-[800px] !rounded-[40px]">{children}</DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
