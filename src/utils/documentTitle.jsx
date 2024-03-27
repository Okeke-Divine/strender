export default function SetDocumentTitle({title}) {
    const newTitle = title + " - Jujora";
    return (
        <head>
            <title>{newTitle}</title>
        </head>
    )
}