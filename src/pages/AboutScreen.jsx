import React from "react";

function AboutScreen() {
  return (
    <div className="flex flex-col justify-start items-center p-10 gap-10 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <h1 className="text-[30px]">About Screen</h1>
      <p className="align-middle w-full ">
        MyStock App is a platform for real-time financial data and the latest
        news to enhance your investment decisions. Leveraging the Twelve Data
        API, MyStock App provides accurate stock market information, including
        live prices with graphs and historical data. Additionally, it integrates
        the Yahoo News API to keep you updated with the latest financial news.
        Built with React and styled using Tailwind CSS
      </p>
      <p className="align-middle w-full ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit
        ornare consequat. In rutrum ipsum a nunc egestas eleifend. Vivamus sed
        ipsum et nisi vestibulum vehicula. Nullam vulputate eu felis posuere
        ultricies. Aliquam nibh erat, ultrices vel tempus in, dictum in diam.
        Sed eros erat, lobortis id elementum vitae, ullamcorper at justo. Nulla
        mollis suscipit euismod.Nullam ornare purus eget nisi tristique, at
        scelerisque libero elementum. Fusce mattis egestas orci sit amet
        commodo. Cras non odio leo. Nullam lacinia odio et massa tempor, id
        consectetur felis tincidunt. Sed consequat massa arcu, ut finibus turpis
        ornare at. Sed egestas turpis rhoncus fringilla suscipit. Nulla congue
        ullamcorper lacus, ultricies semper neque posuere id. Nam quis nisl
        mattis, interdum tellus a, vehicula ipsum. Curabitur sollicitudin libero
        sit amet ipsum malesuada, eget commodo nibh fringilla. Mauris porta
        neque ac lorem faucibus ullamcorper. Phasellus ac sem eget lorem blandit
        tristique. Praesent nec libero id velit molestie eleifend a a augue. Sed
        sit amet sapien in ante venenatis volutpat. Donec malesuada at odio id
        lacinia. Nam iaculis sapien vitae nibh fringilla, eget varius magna
        lacinia.
      </p>
    </div>
  );
}

export default AboutScreen;
