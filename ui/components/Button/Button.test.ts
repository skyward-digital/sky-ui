import { expect } from "@storybook/jest"
import { userEvent, within } from "@storybook/testing-library"

/*
 * See https://storybook.js.org/docs/react/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const testButtonClick = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)

  // Checks button text is displayed correctly
  await expect(canvas.getByText("Button CTA")).toBeInTheDocument()

  // Checks button can be clicked
  await userEvent.click(canvas.getByRole("button"))
}

export const testButtonLink = async ({ canvasElement }: any) => {
  const canvas = within(canvasElement)

  // Checks Button is a link
  await expect(canvas.getByRole("link")).toBeInTheDocument()
}
