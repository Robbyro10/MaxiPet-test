import React, { FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  title: string;
  desc: string;
}

export const Container: FC<Props> = ({ children, title, desc }) => {
  return (
    <div className="mx-48 mt-10 mb-24">
      <p className="text-xs text-[#777777]">{desc}</p>
      <h1 className="text-[#E2081E] font-bold text-xl mb-5">
        {title.toUpperCase()}
      </h1>
      {children}
    </div>
  );
};
