import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const H3 = styled.h3`
  font-size: 30px;
  padding: 83px;
`;

const PlaylistWrapper = styled.div`
  position: fixed;
  top: 50%;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  transform: translate(${({ isOpen }) => (isOpen ? '0' : '100%')}, -50%);
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease, transform 0.3s ease;
  z-index: 999;
`;

const PlaylistToggleButton = styled.div`
  position: fixed;
  top: 50%;
  right: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  transform: translateY(-50%);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  cursor: pointer;
  transition: right 0.3s ease, transform 0.3s ease;

  &:hover {
    right: ${({ isOpen }) => (isOpen ? '300px' : '5px')};
  }
`;

const PlaylistItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: lightgray;
  }
`;

const ArtistImage = styled.img`
  width: 50px;
  height: 50px;
`;

function MyPage() {
  const [artists, setArtists] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=df86cb0ad555779ebb72ecbeb8a99aec&format=json'
        );

        console.log(JSON.stringify(response.data)); // JSON 데이터 출력
        setArtists(response.data.artists.artist.slice(0, 10)); // 처음 10개 아티스트만 선택
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleTogglePlaylist = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <PlaylistToggleButton isOpen={isOpen} onClick={handleTogglePlaylist}>
        {isOpen ? '>' : '<'}
      </PlaylistToggleButton>
      <PlaylistWrapper isOpen={isOpen}>
        <H3>TODAY PLAYLIST</H3>
        <ul>
          {artists.map((artist) => (
            <PlaylistItem
              key={artist.name}
              onClick={() => handleItemClick(artist.url)}
            >
              <ArtistImage
                src={artist.image.find((img) => img.size === 'small')['#text']}
                alt={artist.name}
              />
              {artist.name}
            </PlaylistItem>
          ))}
        </ul>
      </PlaylistWrapper>
    </>
  );
}

export default MyPage;
