import React from "react";
import BackendCustomChart from "./BackendCustomChart";

type Props = {};

const BackendBanner = (props: Props) => {
  return (
    <section className="container section-padding">
      <h2 className="home-heading text-center">
        Hold on {`it's `}time to generate <br /> Node Js Backend for you!
      </h2>
      <div className="flex justify-center">
        <p className="w-[60%] text-center mt-5">
          Temgen generates a Node.js server with CRUD operations, following
          microservices coding patterns. With just a few steps, your project
          comes to life effortlessly!
        </p>
      </div>
      <div className="pt-20 flex justify-center">
        <BackendCustomChart></BackendCustomChart>
      </div>
    </section>
  );
};

export default BackendBanner;
