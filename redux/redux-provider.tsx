"use client";

import { Provider } from "react-redux";
import store from "./store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Provider store={store}>{children}</Provider>
        </div>
      </body>
    </html>
  );
}
