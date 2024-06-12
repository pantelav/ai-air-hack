import Player from 'video.js/dist/types/player';

export interface VideoJsMarker {
  time: number;
  duration?: number;
  text?: string;
  class?: string;
  overlayText?: string;
  key?: string;
  id?: string;
  disabled?: boolean;
}

export interface VideoJsMarkerPluginSettings {
  markerStyle?: object;
  markerTip?: {
    display?: boolean;
    html?(marker: VideoJsMarker): string;
    text?(marker: VideoJsMarker): string;
    time?(marker: VideoJsMarker): number;
  };
  breakOverlay?: {
    display: boolean;
    displayTime: number;
    style: object;
    text(marker: VideoJsMarker): string;
  };
  markers?: VideoJsMarker[];
  onMarkerClick?(marker: VideoJsMarker): boolean | void;
  onMarkerReached?(marker: VideoJsMarker, index: number): void;
  onTimeUpdateAfterMarkerUpdate?(): void;
}

export interface ExtendedPlayer extends Player {
  markers(options: VideoJsMarkerPluginSettings): void
}
