import { MdDateRange } from "react-icons/md";

const Blog = ({blog}) => {
    const {answer, question, addedDate} = blog;
    return (
        <div className="bg-gray-100 rounded-xl border border-gray-300 p-5 my-6 space-y-4">
                <h2 className="text-2xl font-bold">{question}</h2>
                <div className="border border-neutral-300 border-dashed"> </div>
                <h2 className="flex flex-col gap-2 my-3">
                    <span className="text-lg text-blue-400 font-medium">Answer :</span>
                    <span className="font-medium text-lg opacity-90">{answer}</span>
                </h2>
                <div className="border border-neutral-300 border-dashed"> </div>
                <h3 className="text-neutral-500 5 font-medium flex gap-1 items-center"><MdDateRange size={25}></MdDateRange> Added at {addedDate}</h3>
        </div>
    );
};

export default Blog;