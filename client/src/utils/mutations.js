import { gql } from "@apollo/client";

export const CREATE_ART_THING = gql`
  mutation CreateArtThing(
    $title: String
    $image: String
    $description: String
    $date: Date
  ) {
    createArtThing(
      title: $title
      image: $image
      description: $description
      date: $date
    ) {
      _id
      title
      description
      date
      image
    }
  }
`;

export const CREATE_CRAFT_THING = gql`
  mutation CreateCraftThing(
    $title: String
    $description: String
    $date: Date
    $image: String
  ) {
    createCraftThing(
      title: $title
      description: $description
      date: $date
      image: $image
    ) {
      _id
      title
      description
      date
      image
    }
  }
`;

export const CREATE_DESIGN_THING = gql`
  mutation CreateDesignThing(
    $title: String
    $description: String
    $date: Date
    $image: String
  ) {
    createDesignThing(
      title: $title
      description: $description
      date: $date
      image: $image
    ) {
      _id
      title
      description
      date
      image
    }
  }
`;

export const CREATE_DEV_THING = gql`
  mutation CreateDevThing(
    $title: String
    $description: String
    $date: Date
    $image: String
    $video: String
    $tech: [String]
    $collab: [String]
    $github: String
    $deployed: String
  ) {
    createDevThing(
      title: $title
      description: $description
      date: $date
      image: $image
      video: $video
      tech: $tech
      collab: $collab
      github: $github
      deployed: $deployed
    ) {
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

export const CREATE_MUSIC_THING = gql`
  mutation CreateMusicThing(
    $title: String
    $lyrics: String
    $date: Date
    $image: String
    $cover: Boolean
  ) {
    createMusicThing(
      title: $title
      lyrics: $lyrics
      date: $date
      image: $image
      cover: $cover
    ) {
      _id
      title
      lyrics
      date
      image
      cover
    }
  }
`;
