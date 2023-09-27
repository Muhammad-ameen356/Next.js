import React from "react";

interface Prop {
  params: { slug: string[] };
  searchParams: { pageSize: string };
}

const SlugPage = ({ params: { slug }, searchParams }: Prop) => {
  console.log(searchParams.pageSize, "pageSize");
  return (
    <div>
      page{slug}, {searchParams.pageSize}
    </div>
  );
};

export default SlugPage;
