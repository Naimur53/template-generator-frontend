import { useAppDispatch } from "@/redux/app/store";
import { removeApis } from "@/redux/features/frontEndGen/frontEndGen";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ReduxCreatedFileCloseButton({ name }: { name: string }) {
    const dispatch = useAppDispatch();
    return (
        <p key={name} className="group">
            {name}
            <button
                onClick={() => dispatch(removeApis(name))}
                className="opacity-0 invisible ml-2 group-hover:visible group-hover:opacity-100 "
            >
                <FontAwesomeIcon className="" icon={faClose} />
            </button>
        </p>
    );
};
