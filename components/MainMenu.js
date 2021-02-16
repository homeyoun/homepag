import Link from "next/link";
import React from "react";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";

const MainMenuLists = [
  { title: "꽃바구니", href: "#" },
  { title: "꽃다발", href: "#" },
  { title: "대형꽃다발", href: "#" },
  { title: "관엽화분", href: "#" },
  { title: "동서양난", href: "#" },
  { title: "축하화환", href: "#" },
  { title: "근조화환", href: "#" },
  { title: "공기정화식물", href: "#" },
  {
    title: <SearchOutlined style={{ fontSize: "16px", lineHeight: "3rem" }} />,
    href: "#",
  },
  {
    title: (
      <ShoppingOutlined style={{ fontSize: "16px", lineHeight: "3rem" }} />
    ),
    href: "#",
  },
];
const MainMenuLiList = MainMenuLists.map((list, index) => (
  <li key={index}>
    <Link href={list.href}>
      <a className="text-red-100 hover:text-yellow-500">{list.title}</a>
    </Link>
  </li>
));
const MainMenu = () => {
  return (
    <div className="bg-red-700 h-12 mt-5 flex justify-center">
      <ul className="flex w-4/6 h-12 items-center justify-around">
        {MainMenuLiList}
      </ul>
    </div>
  );
};

export default MainMenu;
