import React from "react";
import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";



function splitStringUsingRegex(inputString: string): string[] {
    const characters: string[] = [];
    const regex = /[\s\S]/gu;
  
    let match;
    while ((match = regex.exec(inputString)) !== null) {
      characters.push(match[0]);
    }
  
    return characters;
  }

export default splitStringUsingRegex; 