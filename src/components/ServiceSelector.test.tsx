import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ServiceSelector } from "./ServiceSelector";

describe("ServiceSelector", () => {         
    it("calls onToggleService when a service is clicked", async () => {
        const user = userEvent.setup();
        const onToggleService = vi.fn();

        render(
            <ServiceSelector selectedServices={[]} onToggleService={onToggleService}/>
        );

        const seoCheckbox = screen.getByLabelText(/SEO/i);
        await user.click(seoCheckbox);
        expect(onToggleService).toHaveBeenCalledWith("seo");
    });

    it("shows a service as checked when it is already selected", () => {
        render(<ServiceSelector selectedServices={["seo"]} onToggleService={() => {}}/>);

        const seoCheckbox = screen.getByLabelText(/SEO/i) as HTMLInputElement;
        expect(seoCheckbox.checked).toBe(true);
    }); 
})
 