import { type NextPage } from "next";
import Button from "@/components/Button";

const Home: NextPage = () => {
  return (
    <div className="space-y-10">
      <div className="px-4">
        <h1 className="">Types</h1>
        <hr />
        <div className="mt-8 space-x-10">
          <Button />
          <Button variant="outlined" />
          <Button variant="ghost" />
          <Button variant="soft" />
          <Button variant="link" />
          <Button variant="white" />
        </div>
      </div>
      <div className="px-4">
        <h1 className="">Sizes</h1>
        <hr />
        <div className="mt-8 space-x-10">
          <Button size="small" />
          <Button />
          <Button size="large" />
        </div>
      </div>
      <div className="px-4">
        <h1 className="">Shapes</h1>
        <hr />
        <div className="mt-8 space-x-10">
          <Button />
          <Button shape="pilled" />
        </div>
      </div>
      <div className="px-4">
        <h1 className="">Block Button: w-full</h1>
        <hr />
        <div className="mt-8 space-y-2">
          <Button className="w-full" />
          <Button className="w-full" variant="white" />
        </div>
      </div>
      <div className="px-4">
        <h1 className="">Block Button: parent grid</h1>
        <hr />
        <div className="mt-8 grid grid-cols-12 gap-4">
          <Button className="col-span-6" />
          <Button className="col-span-6" variant="white" />
        </div>
      </div>
    </div>
  );
};

export default Home;
