"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const EditorAddObjectList = () => {
  return (
    <div className='w-full p-4'>
      <Accordion type='single' collapsible>
        <AccordionItem value='drums'>
          <AccordionTrigger>Drums</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value='guitars'>
          <AccordionTrigger>Guitars</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
        <AccordionItem value='brass'>
          <AccordionTrigger>Brass</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default EditorAddObjectList;
