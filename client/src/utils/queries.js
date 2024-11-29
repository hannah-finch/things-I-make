import { gql } from "@apollo/client";

export const GET_ARTS = gql`
  query arts {
    artThings {
      _id
      title
      description
      date
      image
    }
  }
`;

export const GET_CRAFTS = gql`
  query crafts {
    craftThings {
      _id
      title
      description
      date
      image
    }
  }
`;

export const GET_DESIGNS = gql`
  query designs {
    designThings {
      _id
      title
      description
      date
      image
    }
  }
`;

export const GET_DEVS = gql`
  query devs {
    devThings {
      _id
      title
      description
      date
      image
      video
      tech
      collab
      github
      deployed
    }
  }
`;

export const GET_MUSICS = gql`
  query musics {
    musicThings {
      _id
      title
      lyrics
      date
      image
      cover
      file
    }
  }
`;
