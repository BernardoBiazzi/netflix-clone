import { useEffect } from "react";

const useDocumentTitle = (title = 'Início') => {
    useEffect(() => {
        document.title = `${title} - Netflix`;
    }, [title]);
};

export default useDocumentTitle;