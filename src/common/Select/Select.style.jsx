import tw, { styled } from 'twin.macro';

export const SingleSelectWrapper = styled.div`
  ${tw`
    flex
    items-center
    font-primary 
    font-bold 
  `}
  .react-select-container{
    ${tw`
      w-40
    `}
  }
  
  
  /* If searchable */
  .react-select__input-container{
    ${tw`
      font-bold
      text-white
    `}
  }
  .react-select__control{
    ${tw`
      bg-transparent 
      shadow-none
      border-2
      border-opacity-40
      border-opacity-100 
      border-accent
      hover:(border-accent)
      rounded-none
      font-bold
      text-lg
    `}
  }
  .react-select__control--is-focused{
    ${tw`
      border-accent
      hover:border-accent
    `}
    /* arrow */
    .react-select__indicators svg{
      ${tw`
        text-accent
        opacity-100
      `}
    }
  }
  /* Shown value */
  .react-select__single-value{
    ${tw`
      capitalize
      font-bold
      text-accent
    `}
  }
  /* line between option and arrow */
  .react-select__indicator-separator{
    display: none;
  }
  /* Arrow */
  .react-select__indicators svg{
    ${tw`
      fill-current 
      text-accent
      opacity-40
    `} 
  }
  /* Items */
  .react-select__menu{
    ${tw`
      overflow-hidden
      border-2
      border-accent
      bg-primary
    `}
  }
  .react-select__menu-list{
    ${tw`
      p-0
    `}
  }
  .react-select__option{
    ${tw`
      bg-none
      text-accent
      hover:(bg-accent text-primary)
      font-bold
      capitalize 
      text-lg
    `}
  }
  .react-select__option--is-focused{
    ${tw`
      bg-accent-hover
      text-primary
    `}
  }
  .react-select__option--is-selected{
    ${tw`
      bg-accent
      text-primary
    `}
  }
  /* No options */
  .react-select__menu-notice.react-select__menu-notice--no-options{
    ${tw`
      text-primary 
    `}
  }
`;
