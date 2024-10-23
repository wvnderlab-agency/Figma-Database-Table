const { widget } = figma;
const {
  // Components
  AutoLayout,
  Text,
} = widget;

import { KeyType, getKeyDecorator } from "./key";

export interface Column {
  name: string;
  type: string;
  nullable: boolean;
  keyType: KeyType | "normal";
  description?: string;
}

export function KeyColumn(props) {
  const { column } = props;
  const { icon, color } = getKeyDecorator(column);

  return (
    <AutoLayout
      width="fill-parent"
      fill="#ffffff"
      verticalAlignItems="center"
      horizontalAlignItems="center"
      direction="vertical"
      padding={{
        right: 16,
      }}
    >
      <AutoLayout
        width="fill-parent"
        height={48}
        padding={{
          right: 16,
        }}
        fill="#ffffff"
        verticalAlignItems="center"
        horizontalAlignItems="center"
        tooltip={column.description}
      >
        <Text
          width={32}
          height={32}
          fontSize={18}
          fontFamily="Font Awesome 6 Free"
          fontWeight={900}
          fill={color}
          verticalAlignText="center"
          horizontalAlignText="center"
        >
          {icon}
        </Text>

        <Text width="fill-parent" fontFamily="Roboto Mono" fontSize={18}>
          {column.name}
        </Text>
        <Text fontFamily="Roboto Mono" fontSize={18}>
          {column.type}
          {column.nullable ? "?" : ""}
        </Text>
      </AutoLayout>
      {column.description && (
        <AutoLayout
          width="fill-parent"
          padding={{
            left: 32,
            bottom: 8,
          }}
        >
          <Text
            width="fill-parent"
            fontFamily="Roboto Mono"
            fontSize={14}
            italic
            fill="#666"
          >
            {column.description}
          </Text>
        </AutoLayout>
      )}
    </AutoLayout>
  );
}

export default KeyColumn;
