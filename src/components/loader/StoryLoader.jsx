import ContentLoader from 'react-content-loader'

const StoryLoader = props => (
    <ContentLoader
        speed={1}
        width='fit'
        height={100}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        className='space-x-2'
    >
        <circle cx="46" cy="44" r="44" />
        <circle cx="157" cy="44" r="44" />
        <circle cx="267" cy="44" r="44" />
        <circle cx="377" cy="44" r="44" />
        <circle cx="487" cy="44" r="44" />
        <circle cx="597" cy="44" r="44" />
        <circle cx="707" cy="44" r="44" />
        <circle cx="817" cy="44" r="44" />
    </ContentLoader>
)

export default StoryLoader;