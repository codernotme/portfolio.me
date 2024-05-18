'use client';
import React, { useEffect } from "react";

export default function Socials(): JSX.Element {
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const targetData = target.getBoundingClientRect();
      const targetIcon = target.querySelector("i");
      const offset = {
        x: ((e.pageX - (targetData.left + targetData.width / 2)) / 4) * -1,
        y: ((e.pageY - (targetData.top + targetData.height / 2)) / 4) * -1
      };

      if (target.style) {
        target.style.transform = `translate(${offset.x}px, ${offset.y}px) scale(1.1)`;
        target.style.webkitTransform = `translate(${offset.x}px, ${offset.y}px) scale(1.1)`;
      }

      document.querySelectorAll(".socials-item-icon").forEach((element: Element) => {
        if (element !== target) {
          if (element instanceof HTMLElement) {
            element.style.transform = `translate(${offset.x / 2}px, ${offset.y / 2}px) scale(0.9)`;
            element.style.webkitTransform = `translate(${offset.x / 2}px, ${offset.y / 2}px) scale(0.9)`;
          }
        }
      });

      if (targetIcon) {
        if (targetIcon instanceof HTMLElement) {
          targetIcon.style.transform = `translate(${offset.x}px, ${offset.y}px) scale(1.1)`;
          targetIcon.style.webkitTransform = `translate(${offset.x}px, ${offset.y}px) scale(1.1)`;
        }
      }
    };

    const mouseLeave = () => {
      document.querySelectorAll(".socials-item-icon").forEach((element: Element) => {
        const targetIcon = element.querySelector("i");
        if (element instanceof HTMLElement) {
          element.style.transform = "translate(0px, 0px) scale(1)";
          element.style.webkitTransform = "translate(0px, 0px) scale(1)";
        }
        if (targetIcon) {
          if (targetIcon instanceof HTMLElement) {
            targetIcon.style.transform = "translate(0px, 0px) scale(1)";
            targetIcon.style.webkitTransform = "translate(0px, 0px) scale(1)";
          }
        }
      });
    };

    const items = document.querySelectorAll(".socials-item-icon");
    items.forEach((item) => {
      if (item instanceof HTMLElement) {
        item.addEventListener("mousemove", mouseMove);
        item.addEventListener("mouseleave", mouseLeave);
      }
    });

    return () => {
      items.forEach((item) => {
        if (item instanceof HTMLElement) {
          item.removeEventListener("mousemove", mouseMove);
          item.removeEventListener("mouseleave", mouseLeave);
        }
      });
    };
  }, []);

  return (
    <div className="socials">
      <div className="socials-item">
        <a href="https://www.linkedin.com/in/codernotme/" className="socials-item-icon socials-item-icon__linkedin"  rel="noopener noreferrer">
          <i><span></span></i>
        </a>
      </div>
      <div className="socials-item">
        <a href="https://codepen.io/codernotme/" className="socials-item-icon socials-item-icon__codepen"  rel="noopener noreferrer">
          <i><span></span></i>
        </a>
      </div>
      <div className="socials-item">
        <a href="https://github.com/codernotme" className="socials-item-icon socials-item-icon__github"  rel="noopener noreferrer">
          <i><span></span></i>
        </a>
      </div>
      <div className="socials-item">
        <a href="https://www.instagram.com/outta_urreach/" className="socials-item-icon socials-item-icon__instagram"  rel="noopener noreferrer">
          <i><span></span></i>
        </a>
      </div>
    </div>
  );
}
