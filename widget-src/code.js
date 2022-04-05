"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { widget } = figma;
const { AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, usePropertyMenu, useSyncedState, } = widget;
function Widget() {
    let [CardDescription, setCardDescription] = useSyncedState("", "TUK components...");
    let TruncateCardAssignedTo = "Shahid Afridi";
    let DueDate = "14th, August 2050";
    const handleTooltip = () => __awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => {
            figma.showUI(__html__);
            setCardDescription("TUK components needs to be profiled & memoized accordingly.");
            figma.ui.on("message", (msg) => {
                if (msg === "hello") {
                    figma.notify(`Hello Widgets`);
                }
                if (msg === "close") {
                    figma.closePlugin();
                }
            });
        });
    });
    usePropertyMenu([
        {
            tooltip: "Edit",
            propertyName: "edit",
            itemType: "action",
        },
    ], ({ propertyName }) => {
        switch (propertyName) {
            case "edit":
                return handleTooltip();
            default:
                throw new Error(`Unexpected property type: ${propertyName}`);
        }
    });
    return (figma.widget.h(AutoLayout, { width: "hug-contents", direction: "vertical", 
        // horizontalAlignItems="center"
        verticalAlignItems: "start", height: "hug-contents", padding: 17, fill: "#34d399", cornerRadius: 20, spacing: 12, onClick: () => __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve) => {
                figma.showUI(__html__);
                setCardDescription("TUK components needs to be profiled & memoized accordingly.");
                // figma.ui.on("message", (msg) => {
                //   if (msg === "hello") {
                //     figma.notify(`Hello Widgets`);
                //   }
                //   if (msg === "close") {
                //     figma.closePlugin();
                //   }
                // });
            });
        }) },
        figma.widget.h(AutoLayout, { direction: "horizontal", horizontalAlignItems: "center", 
            // fill="#fdba74"
            // padding={10}
            width: "fill-parent" },
            figma.widget.h(Text, { fontSize: 24, horizontalAlignText: "center", fill: "#FFFFFF", fontWeight: "bold" }, "TUK Optimization")),
        figma.widget.h(AutoLayout, { direction: "horizontal", horizontalAlignItems: "center", verticalAlignItems: "end", fill: "#fdba74", padding: 10, cornerRadius: 10, width: "fill-parent" },
            figma.widget.h(Text, { fontSize: 18, horizontalAlignText: "left", fill: "#FFFFFF", fontWeight: "bold" }, "Description"),
            figma.widget.h(Text, { fontSize: 16, horizontalAlignText: "left", fill: "#44403c" },
                "\u00A0 ",
                CardDescription)),
        figma.widget.h(AutoLayout, { direction: "horizontal", verticalAlignItems: "end", fill: "#fdba74", padding: 10, cornerRadius: 10, width: "fill-parent" },
            figma.widget.h(Text, { fontSize: 18, horizontalAlignText: "left", fill: "#FFFFFF", fontWeight: "bold" }, "Assigned to"),
            figma.widget.h(Text, { fontSize: 16, horizontalAlignText: "left", fill: "#44403c" },
                "\u00A0 ",
                TruncateCardAssignedTo)),
        figma.widget.h(AutoLayout, { direction: "horizontal", horizontalAlignItems: "center", verticalAlignItems: "end", fill: "#fdba74", padding: 10, cornerRadius: 10, width: "fill-parent" },
            figma.widget.h(Text, { fontSize: 18, horizontalAlignText: "left", fill: "#FFFFFF", fontWeight: "bold" }, "Due Date"),
            figma.widget.h(Text, { fontSize: 16, horizontalAlignText: "left", fill: "#44403c" },
                "\u00A0 ",
                DueDate))));
}
widget.register(Widget);
