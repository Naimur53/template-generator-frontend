import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Testimonials() {
    const data = [
        {
            rating: 2,
            des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quis est obcaecati accusantium eligendi doloribus porro sed consectetur aperiam blanditiis earum nam dolorum inventore tempore dolorem delectus culpa nihil velit!",
            photoUrl:
                "https://lh3.googleusercontent.com/-3Y3FGxjj2k0/AAAAAAAAAAI/AAAAAAAAAAA/AFNEGgJxiqTuWXHxR-glYr8QUBS1XCBJaw/photo.jpg?sz=46",
            displayName: "Naimur",
            profession: "Front End Developer",
        },
    ];
    return (
        <section className="container mx-auto section-padding">
            <div className="flex justify-center items-center">
                <div className="text-center">
                    <h2 className="home-heading">Testimonials</h2>
                    <p>{`Let's`} hear from user like you! </p>
                </div>
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-3">
                    {data.map((single, i) => (
                        <div
                            key={i}
                            className="p-5 px-6 border rounded-lg border-cyan-400"
                        >
                            <div className="w-full">
                                <FontAwesomeIcon
                                    icon={faQuoteLeft}
                                    className="text-3xl text-cyan-400"
                                ></FontAwesomeIcon>
                            </div>
                            <p className="text-secondary py-4 px-5 ">{single.des}</p>
                            <div className="w-full">
                                <FontAwesomeIcon
                                    icon={faQuoteRight}
                                    className="text-3xl text-cyan-400"
                                ></FontAwesomeIcon>
                            </div>
                            <div className="mt-5 flex gap-4 ">
                                <img
                                    className="w-[50px] rounded-full"
                                    src={single.photoUrl}
                                    alt="user"
                                />
                                <div className="">
                                    <h4 className="font-bold text-lg">{single.displayName}</h4>
                                    <span className="text-secondary">{single.profession}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
