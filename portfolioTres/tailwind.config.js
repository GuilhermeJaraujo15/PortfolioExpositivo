tailwind.config = {
        theme: {
          extend: {
            colors: {
              graphite: {
                950: "#0B1015",
                900: "#101820",
                800: "#182029",
                700: "#232C36",
                600: "#3A4753",
                500: "#5B6B78",
                400: "#8493A0",
                300: "#B7C2CA",
                200: "#DDE4E8",
                100: "#EFF3F5",
                50: "#F7FAFB",
              },
              cyan: {
                600: "#0891A8",
                500: "#00B4C6",
                400: "#2FD1E0",
              },
              teal: {
                600: "#0E8E7D",
                500: "#14B8A6",
                400: "#4FD1C0",
              },
              lime: {
                500: "#B7D400",
                400: "#CBE838",
              },
              amber: {
                400: "#FBBF24",
                500: "#F59E0B",
              },
            },
            fontFamily: {
              display: ['"Space Grotesk"', "sans-serif"],
              body: ['"IBM Plex Sans"', "sans-serif"],
              mono: ['"IBM Plex Mono"', "monospace"],
            },
            maxWidth: {
              content: "72rem",
            },
            boxShadow: {
              glass: "0 8px 32px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.03)",
              "glass-hover":
                "0 12px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.05)",
              card: "0 4px 20px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
              "card-hover":
                "0 12px 40px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
            },
          },
        },
      };
