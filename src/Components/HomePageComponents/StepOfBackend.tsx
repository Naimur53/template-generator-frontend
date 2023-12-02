import Link from "next/link";
import React from "react";

type Props = {};

const StepOfBackend = (props: Props) => {
  return (
    <div>
      <div className="service-area">
        <div className="wave-step"></div>
        <div className="graydiv"></div>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
          <div className=" p-4  col-span-1 lg:col-span-4">
            <div>
              <div className=" font-bold text-4xl mb-4 text-cyan-600">
                {" "}
                STEPS
              </div>

              <Link href="/services" style={{ textDecoration: "none" }}>
                <div>How Service A2Z Works</div>
              </Link>
              <div>
                {" "}
                Our provider will provide their service to user. After order
                user can asked their query to provider. Service A to Z will keep
                small amount of salary from provider
              </div>
              <Link href="/services" style={{ textDecoration: "none" }}>
                <button>Our services</button>
              </Link>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div>
              <div className="position-1 ">
                <div className="step-around "></div>
                <div>
                  {/* <AssignmentOutlinedIcon
                                        className=' '
                                        sx={{
                                            fontSize: '50px',
                                            borderStyle: 'none',
                                            height: 'auto ',
                                            maxWidth: '100%',
                                            verticalAlign: 'middle',

                                        }} /> */}
                </div>
              </div>
            </div>

            <div className="step-section step-1">
              <div>
                <div>Describe Your Task</div>
              </div>

              <div>
                Chose your needed service and then go to details page on left
                side you will find category by choosing your category a modal
                will open
              </div>
              <div className="front"></div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div>
              <div className="position-2">
                <div className="step-around"></div>
                <div>
                  {/* <AccountCircleOutlinedIcon
                                        className='img-rotate'
                                        sx={{
                                            fontSize: '50px',
                                            borderStyle: 'none',
                                            height: 'auto ',
                                            maxWidth: '100%',
                                            verticalAlign: 'middle',
                                        }} /> */}
                </div>
              </div>
            </div>
            <div className="step-section step-2">
              <div>
                <div>Choose a Tasker</div>
              </div>
              <div>
                Chose you a provider who will be provide your service you can
                save this order for later or you can complete your order by
                clicking next then give our info and card to confirm order.
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <div>
              <div className="position-3">
                <div className="step-around"></div>
                <div>
                  {/* <sychologyOutlinePdIcon
                                        className='img-rotate'
                                        sx={{
                                            fontSize: '50px',
                                            borderStyle: 'none',
                                            height: 'auto ',
                                            maxWidth: '100%',
                                            verticalAlign: 'middle',
                                        }} /> */}
                </div>
              </div>
            </div>
            <div className="step-section step-3">
              <div>
                <div>Live Smarter</div>
              </div>
              <div>
                After a order complete you can chat with your provider. On my
                Orders chat page you can find all of your order then you will
                find a chat icons beside provider info by clicking that icons
                you can chat with provider
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOfBackend;
