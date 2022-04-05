const { widget, ui, showUI } = figma;
const {
  AutoLayout,
  Ellipse,
  Frame,
  Image,
  Rectangle,
  SVG,
  Text,
  usePropertyMenu,
  useSyncedState,
  useEffect,
} = widget;

interface Data {
  cardtitle: string;
  description: string;
  cardassignment?: string;
  duedate: string;
}

function Widget() {
  const [data, setData] = useSyncedState<Data | null>("data", null);
  const handleTooltip = async () => {
    await new Promise((resolve) => {
      figma.showUI(__html__);
      // setCardDescription(
      //   "TUK components needs to be profiled & memoized accordingly."
      // );
      figma.ui.on("message", (msg) => {
        if (msg === "hello") {
          figma.notify(`Hello Widgets`);
        }
        if (msg === "close") {
          figma.closePlugin();
        }
      });
    });
  };
  usePropertyMenu(
    [
      {
        tooltip: "Edit",
        propertyName: "edit",
        itemType: "action",
      },
    ],
    ({ propertyName }) => {
      switch (propertyName) {
        case "edit":
          return handleTooltip();
        default:
          throw new Error(`Unexpected property type: ${propertyName}`);
      }
    }
  );
  useEffect(() => {
    ui.onmessage = (message) => {
      if (message.type === "addData") {
        setData(message.payload);
        ui.close();
      }

      if (message.type === "close") {
        ui.close();
      }
    };
  });
  return (
    <AutoLayout
      // width={400}
      direction="vertical"
      // horizontalAlignItems="center"
      verticalAlignItems="start"
      height="hug-contents"
      padding={17}
      fill="#34d399"
      cornerRadius={20}
      spacing={12}
      onClick={async () => {
        await new Promise((resolve) => {
          figma.showUI(__html__);
        });
      }}
    >
      {data ? (
        <AutoLayout
          width="hug-contents"
          direction="vertical"
          spacing={12}
          verticalAlignItems="start"
          height="hug-contents"
        >
          <AutoLayout
            direction="horizontal"
            horizontalAlignItems="center"
            width={"fill-parent"}
          >
            <Text
              fontSize={24}
              horizontalAlignText="center"
              fill="#FFFFFF"
              fontWeight={"bold"}
            >
              {data.cardtitle}
            </Text>
          </AutoLayout>
          <AutoLayout
            direction="horizontal"
            verticalAlignItems="end"
            fill="#fdba74"
            padding={10}
            cornerRadius={10}
            width={"fill-parent"}
          >
            <Text
              fontSize={18}
              horizontalAlignText="left"
              fill="#FFFFFF"
              fontWeight={"bold"}
            >
              Description
            </Text>
            <Text fontSize={16} horizontalAlignText="left" fill="#44403c">
              &nbsp; {data.description}
            </Text>
          </AutoLayout>
          <AutoLayout
            direction="horizontal"
            verticalAlignItems="end"
            fill="#fdba74"
            padding={10}
            cornerRadius={10}
            width={"fill-parent"}
          >
            <Text
              fontSize={18}
              horizontalAlignText="left"
              fill="#FFFFFF"
              fontWeight={"bold"}
            >
              Assigned to
            </Text>
            <Text fontSize={16} horizontalAlignText="left" fill="#44403c">
              &nbsp; {data.cardassignment}
            </Text>
          </AutoLayout>
          <AutoLayout
            direction="horizontal"
            verticalAlignItems="end"
            fill="#fdba74"
            padding={10}
            cornerRadius={10}
            width={"fill-parent"}
          >
            <Text
              fontSize={18}
              horizontalAlignText="left"
              fill="#FFFFFF"
              fontWeight={"bold"}
            >
              Due Date
            </Text>
            <Text fontSize={16} horizontalAlignText="left" fill="#44403c">
              &nbsp; {data.duedate}
            </Text>
          </AutoLayout>
        </AutoLayout>
      ) : (
        <AutoLayout
          onClick={async () => {
            await new Promise((resolve) => {
              figma.showUI(__html__);
              // setCardDescription(
              //   "TUK components needs to be profiled & memoized accordingly."
              // );
              // figma.ui.on("message", (msg) => {
              //   if (msg === "hello") {
              //     figma.notify(`Hello Widgets`);
              //   }
              //   if (msg === "close") {
              //     figma.closePlugin();
              //   }
              // });
            });
          }}
          width={150}
          height={150}
          direction="vertical"
          padding={40}
          horizontalAlignItems="center"
          verticalAlignItems="center"
          fill="#bbf7d0"
          cornerRadius={8}
        >
          <SVG
            src={`<svg xmlns="http://www.w3.org/2000/svg" width="147"  fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                `}
          />
          <Text
            fontSize={16}
            // width="120"
            height="fill-parent"
            horizontalAlignText="center"
            verticalAlignText="bottom"
            fill="#000000 "
            fontWeight="bold"
          >
            Add Card
          </Text>
        </AutoLayout>
      )}
    </AutoLayout>
  );
}
widget.register(Widget);
