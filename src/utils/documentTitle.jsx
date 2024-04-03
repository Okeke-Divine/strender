export default function SetDocumentTitle({title}) {
    const newTitle = title + " - Strender";
    return (
        <head>
            <title>{newTitle}</title>
        </head>
    )
}