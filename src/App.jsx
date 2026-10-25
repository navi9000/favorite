import { ConfigProvider } from "antd"
import { Provider } from "react-redux"
import { store } from "@/store/store"
import { Routes } from "@/routes/routes"

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2563eb",
            colorInfo: "#2563eb",
            colorBgLayout: "#f4f7fb",
            colorText: "#172b4d",
            colorTextSecondary: "#64748b",
            colorBorderSecondary: "#e7edf5",
            borderRadius: 10,
            borderRadiusLG: 16,
            fontFamily:
              'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSizeHeading1: 40,
            fontWeightStrong: 650,
          },
          components: {
            Card: {
              bodyPadding: 24,
            },
            Table: {
              headerBg: "#f5f8fc",
              headerColor: "#40536b",
            },
          },
        }}
      >
        <Routes />
      </ConfigProvider>
    </Provider>
  )
}

export default App
