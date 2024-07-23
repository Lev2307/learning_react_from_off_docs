
function getImageUrl(person, size='s') {
    return 'https://i.imgur.com/' + person.imageId + size + '.jpg'
}

function Avatar({ person, size }) {
    return(
        <>
            <img src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
            />
        </>
    );
}

export default Avatar;