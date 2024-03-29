import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col mb-10'>
      <h1 className='head_text text-left'>
        <span className='orange_gradient font-Bricolage'>{type} Post</span>
      </h1>
      <p className='desc text-left max-w-md font-Bricolage'>{type} and share amazing prompts with the world and let your imagination run wild with any AI-powered platform.</p>

      <form 
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-inter font-semibold text-base text-gray-200'>Your AI Prompt</span>

          <textarea
          value={post.prompt}
          onChange={(e) => setPost({...post, prompt: e.target.value})}
          placeholder='Write your prompt here...'
          required
          className='form_textarea'/>
          
        </label>

        <label>
          <span className='font-inter font-semibold text-base text-gray-200'>Tag  {` `}
          <span className='font-normal'>(#product. #webdevelopment, #idea)</span></span>

          <input
          value={post.tag}
          onChange={(e) => setPost({...post, tag: e.target.value})}
          placeholder='#tag'
          required
          className='form_input'/>
          
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-200 text-sm font-Bricolage'>Cancel</Link>

          <button
          type='submit'
          disabled={submitting}
          className='px-5 py-2 text-sm bg-white text-black rounded-[5px] font-Bricolage'>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form