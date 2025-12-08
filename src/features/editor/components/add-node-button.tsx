"use client";

import { PlusIcon } from "lucide-react";
import { memo, useState } from "react";
import { Button } from "@/components/ui/button";
//import { NodeSelector } from "@/components/node-selector";

export const AddNodeButton = memo(() => {
  return(
      <Button
        onClick={() => {}}
        size="icon"
        variant="outline"
        className="bg-gray-200 hover:bg-primary hover:text-white"
      >
        <PlusIcon className="size-4" />
      </Button>
  )
});

AddNodeButton.displayName = "AddNodeButton";