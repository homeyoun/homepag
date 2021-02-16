import React from "react";
import Link from "next/link";

const TopSubMenu = () => {
  const TopMenuTitles = [
    { title: "로그인", href: "#" },
    { title: "회원가입", href: "#" },
    { title: "주문배송조회", href: "#" },
    { title: "마이페이지", href: "#" },
  ];
  const ToMenuLiList = TopMenuTitles.map((list, index) => (
    <li key={index}>
      <Link href={list.href}>
        <a className="text-gray-900 hover:text-gray-900 hover:underline">
          {list.title}
        </a>
      </Link>
    </li>
  ));

  return (
    <div className="bg-gray-100 flex justify-center  h-7">
      <ul className="text-xs h-7 flex items-center justify-end w-4/6 gap-2 ">
        {ToMenuLiList}
      </ul>
    </div>
  );
};

export default TopSubMenu;
