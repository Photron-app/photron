import { createPopper, Instance } from '@popperjs/core';
import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<Instance | null>(null);

  useEffect(() => {
    if (triggerRef.current && tooltipRef.current) {
      popperInstanceRef.current = createPopper(triggerRef.current, tooltipRef.current, {
        placement: 'right',
        modifiers: [
          {
            name: 'preventOverflow',
            options: {
              boundary: document.body,
            },
          },
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['left', 'bottom', 'top'],
            },
          },
          {
            name: 'offset',
            options: {
              offset: [10, 8], // Adds extra space between the trigger and tooltip
            },
          },
        ],
      });
    }

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.update();
    }
  }, [isVisible]);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onClick={() => setIsVisible(!isVisible)}
        className="inline-block cursor-pointer"
      >
        {children}
      </div>

      {isVisible && (
        <div
          ref={tooltipRef}
          className="absolute z-50 mt-2 ml-4 px-4 py-2 text-xs font-medium text-white bg-gray-700 rounded-lg shadow-lg pointer-events-none"
          role="tooltip"
        >
          {content}
        </div>
      )}
    </>
  );
}
