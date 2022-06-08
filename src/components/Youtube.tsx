import * as React from 'react';
import { useState, useEffect } from 'react';

export default function Youtube({ src }) {
  // @ts-ignore
  return <iframe id="ytplayer" htmlType="text/html" width="640" height="360"
    src={src}
    frameborder="0"></iframe>
}
