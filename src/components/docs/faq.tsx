'use client'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

export const Faq = () => {
  const questions = [
    {
      question: 'Why support different JavaScript frameworks?',
      answer: (
        <>
          Supporting various JavaScript frameworks lets you create design systems that work well on
          different platforms. It gives developers the freedom to pick the tools that suit their
          skills and project needs, boosting productivity and making it easier to maintain the
          codebase over time.
        </>
      ),
    },
    {
      question: 'Which JavaScript frameworks are supported?',
      answer: (
        <>
          Park UI, built on top of Ark UI, supports React, Solid, and Vue. We're planning to add
          Svelte support later this year.
        </>
      ),
    },
    // Added from introduction.mdx (L38–54)
    {
      question: 'Where are pages stored?',
      answer: (
        <>
          All documentation lives in <code>src/content</code> as <code>.mdx</code> files. Each page
          requires frontmatter fields <code>title</code> and <code>description</code>.
        </>
      ),
    },
    {
      question: 'How does routing work?',
      answer: (
        <>
          The dynamic route at <code>src/app/[[...slug]]/page.tsx</code> maps URL segments to a{' '}
          <code>slug</code>. For example, <code>/overview/getting-started</code> resolves to the MDX
          page with slug <code>overview/getting-started</code>.
        </>
      ),
    },
    {
      question: 'How do I add items to the left sidebar and control pagination?',
      answer: (
        <>
          Edit <code>src/data/meta-data.ts</code>. Add entries with <code>title</code> and{' '}
          <code>href</code> (e.g., <code>"/overview/getting-started"</code>). The order in this file
          determines the Prev/Next pagination sequence.
        </>
      ),
    },
    {
      question: 'How is the table of contents generated?',
      answer: (
        <>
          Headings (<code>#</code>, <code>##</code>, <code>###</code>) in your MDX are parsed to build
          a TOC, which is displayed on the right side of the page.
        </>
      ),
    },
    {
      question: 'Does it support code highlighting?',
      answer: (
        <>
          Yes. Code blocks are highlighted via Shiki using the <code>github-dark-default</code> theme.
        </>
      ),
    },
    {
      question: 'What is the default landing page?',
      answer: (
        <>
          If no slug is provided, the site falls back to the <code>introduction</code> page.
        </>
      ),
    },
  ]

  return (
    <Accordion type="multiple" defaultValue={[questions[0].question]} className="not-prose border-y">
      {questions.map((item, id) => (
        <AccordionItem key={id} value={item.question}>
          <AccordionTrigger>
            {item.question}
          </AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
