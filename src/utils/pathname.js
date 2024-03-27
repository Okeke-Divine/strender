export default function PathName(){
    const currentPath = window.location.pathname.slice(1);
    return currentPath;
}