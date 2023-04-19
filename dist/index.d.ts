import parse from "./parse";
declare const Parse: (url: string, config?: any) => Promise<{
    title: any;
    description: any;
    link: any;
    image: any;
    category: any;
    items: any[];
}>;
export default parse;
export { parse, Parse };
