import Home from "@/app/page";
import RootLayout from "@/app/layout";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  it("should render", () => {
    const page = render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
