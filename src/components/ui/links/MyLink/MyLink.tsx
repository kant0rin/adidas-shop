import React, { FunctionComponent } from 'react';
import Link from "next/link";
import './MyLink.scss'
import classNames from "classnames";

export type MyLinkProps = {
  children: React.ReactNode
  href: string
  type: 'big' | 'small'
}


const MyLink: FunctionComponent<MyLinkProps> = ({children, href, type}) => {

  return (
    <Link
      href={href}
      className={classNames('my-link', {'small': type==='small'}, {'big': type==="big"})}
    >
      {children}
    </Link>
  );
};

export default MyLink;
