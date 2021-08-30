import './File.css';

import React from 'react';

import { FileIconProps, fileIconPropSizeDefault } from '../../fileIcons/FileIcon/FileIcon';
import { FileIconAvi } from '../../fileIcons/FileIconAvi/FileIconAvi';
import { FileIconBmp } from '../../fileIcons/FileIconBmp/FileIconBmp';
import { FileIconCsv } from '../../fileIcons/FileIconCsv/FileIconCsv';
import { FileIconDoc } from '../../fileIcons/FileIconDoc/FileIconDoc';
import { FileIconExe } from '../../fileIcons/FileIconExe/FileIconExe';
import { FileIconGif } from '../../fileIcons/FileIconGif/FileIconGif';
import { FileIconJpg } from '../../fileIcons/FileIconJpg/FileIconJpg';
import { FileIconJson } from '../../fileIcons/FileIconJson/FileIconJson';
import { FileIconLoading } from '../../fileIcons/FileIconLoading/FileIconLoading';
import { FileIconMov } from '../../fileIcons/FileIconMov/FileIconMov';
import { FileIconMp3 } from '../../fileIcons/FileIconMp3/FileIconMp3';
import { FileIconMp4 } from '../../fileIcons/FileIconMp4/FileIconMp4';
import { FileIconPdf } from '../../fileIcons/FileIconPdf/FileIconPdf';
import { FileIconPng } from '../../fileIcons/FileIconPng/FileIconPng';
import { FileIconPtt } from '../../fileIcons/FileIconPtt/FileIconPtt';
import { FileIconRar } from '../../fileIcons/FileIconRar/FileIconRar';
import { FileIconRtf } from '../../fileIcons/FileIconRtf/FileIconRtf';
import { FileIconTiff } from '../../fileIcons/FileIconTiff/FileIconTiff';
import { FileIconTxt } from '../../fileIcons/FileIconTxt/FileIconTxt';
import { FileIconUndefined } from '../../fileIcons/FileIconUndefined/FileIconUndefined';
import { FileIconWav } from '../../fileIcons/FileIconWav/FileIconWav';
import { FileIconXls } from '../../fileIcons/FileIconXls/FileIconXls';
import { FileIconZip } from '../../fileIcons/FileIconZip/FileIconZip';
import { cn } from '../../utils/bem';
import { ProgressSpin } from '../ProgressSpin/ProgressSpin';

export enum FileExtensionTypes {
  bmp = 'bmp',
  csv = 'csv',
  avi = 'avi',
  doc = 'doc',
  docx = 'docx',
  gif = 'gif',
  exe = 'exe',
  jpg = 'jpg',
  jpeg = 'jpeg',
  mp3 = 'mp3',
  mov = 'mov',
  mp4 = 'mp4',
  pdf = 'pdf',
  ptt = 'ptt',
  pttx = 'pttx',
  png = 'png',
  rar = 'rar',
  rtf = 'rtf',
  tiff = 'tiff',
  txt = 'txt',
  wav = 'wav',
  zip = 'zip',
  gz = 'gz',
  xls = 'xls',
  xlsx = 'xlsx',
  json = 'json',
}

export type FilePropExtensions = typeof FileExtensionTypes | string;

type Props = {
  extension?: FilePropExtensions;
  loading?: boolean;
  loadingWithProgressSpin?: boolean;
  loadingProgress?: number;
  children?: never;
};

export type FileProps = Props & Omit<FileIconProps, keyof Props>;

export const cnFile = cn('File');

const mapExtensionToSvg: { [value: string]: React.FC<FileIconProps> } = {
  bmp: FileIconBmp,
  csv: FileIconCsv,
  avi: FileIconAvi,
  doc: FileIconDoc,
  docx: FileIconDoc,
  gif: FileIconGif,
  exe: FileIconExe,
  jpg: FileIconJpg,
  jpeg: FileIconJpg,
  mp3: FileIconMp3,
  mov: FileIconMov,
  mp4: FileIconMp4,
  pdf: FileIconPdf,
  ptt: FileIconPtt,
  pttx: FileIconPtt,
  png: FileIconPng,
  rar: FileIconRar,
  rtf: FileIconRtf,
  tiff: FileIconTiff,
  txt: FileIconTxt,
  wav: FileIconWav,
  zip: FileIconZip,
  gz: FileIconZip,
  xls: FileIconXls,
  xlsx: FileIconXls,
  json: FileIconJson,
};

function getIconByExtension(extension?: FilePropExtensions): React.FC<FileIconProps> {
  if (!extension) {
    return FileIconUndefined;
  }
  return mapExtensionToSvg[extension.toString().toLowerCase()] || FileIconUndefined;
}

export const File: React.FC<FileProps> = (props) => {
  const {
    extension,
    loading,
    loadingProgress,
    className,
    size = fileIconPropSizeDefault,
    loadingWithProgressSpin,
    ...otherProps
  } = props;

  if (loading) {
    return (
      <FileIconLoading className={cnFile(null, [className])} size={size} {...otherProps}>
        {loadingWithProgressSpin && (
          <div className={cnFile('Loader', { size })}>
            <ProgressSpin
              className={cnFile('Progress')}
              size={size}
              progress={loadingProgress}
              animation
            />
          </div>
        )}
      </FileIconLoading>
    );
  }

  const Icon = getIconByExtension(extension);

  return <Icon className={cnFile(null, [className])} size={size} {...otherProps} />;
};
