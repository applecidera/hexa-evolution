// 2 second spawn intervals 
export const EASY_PATTERNS = [
	[
		[ 1, 1, 0, 0, 1, 1, 0, 0 ],
		[ 0, 0, 1, 1, 0, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0, 1, 1, 0 ]
  ],
  [
		[ 1, 0, 1, 0, 0, 0, 1, 1 ],
    [ 1, 1, 1, 0, 1, 0, 0, 0 ],
    [ 0, 0, 1, 1, 0, 1, 1, 0 ]
  ],
  [ [ 0, 0, 1, 0, 1, 1, 0, 1 ],
    [ 1, 1, 0, 1, 0, 0, 1, 0 ] 
  ],
  [ [ 1, 1, 1, 0, 0, 1, 0, 0 ],
    [ 1, 0, 0, 1, 1, 0, 0, 1 ] 
  ],
  [ [ 1, 0, 1, 0, 1, 0, 1, 0 ], 
    [ 0, 1, 0, 1, 0, 1, 0, 1 ] 
  ]
];

// 1 second intervals 
export const MEDIUM_PATTERNS = [
	[
		[ 1, 1, 0, 0, 0, 1, 1, 1 ],
		[ 0, 1, 1, 1, 1, 1, 0, 0 ],
		[ 1, 1, 0, 0, 0, 1, 1, 1 ],
		[ 0, 0, 0, 1, 1, 1, 1, 1 ]
  ],
  [
		[ 1, 1, 1, 1, 0, 1, 0, 0 ],
		[ 1, 1, 0, 0, 1, 0, 1, 1 ],
		[ 1, 0, 1, 1, 0, 1, 1, 0 ],
		[ 1, 1, 1, 1, 1, 0, 0, 0 ]
	],
	[
		[ 1, 1, 0, 1, 1, 0, 1, 0 ],
		[ 0, 0, 1, 0, 1, 1, 1, 1 ],
		[ 1, 1, 0, 1, 0, 1, 0, 1 ],
		[ 0, 1, 1, 0, 1, 1, 1, 0 ]
  ],
  [
		[ 1, 0, 0, 1, 1, 0, 1, 1 ],
		[ 0, 1, 1, 1, 0, 1, 1, 0 ],
		[ 1, 1, 0, 1, 0, 1, 0, 1 ],
		[ 0, 1, 1, 1, 1, 1, 0, 0 ]
	]
];

// 0.5 second intervals 
export const HARD_PATTERNS = [
	[
    [ 1, 0, 1, 0, 1, 0, 1, 0 ],
		[ 1, 1, 0, 0, 0, 0, 1, 1 ],
		[ 0, 0, 1, 1, 1, 1, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 0, 0 ],
    [ 1, 1, 1, 1, 0, 0, 1, 1 ],
    [ 1, 1, 0, 0, 0, 0, 1, 1 ],
	],
	[
		[ 0, 1, 0, 1, 0, 1, 0, 1 ],
    [ 1, 1, 1, 0, 1, 1, 1, 1 ],
    [ 1, 0, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 0, 1, 1 ],
    [ 1, 1, 1, 1, 1, 1, 0, 1 ],
    [ 1, 1, 1, 1, 0, 1, 1, 1 ],
		[ 1, 1, 1, 1, 1, 1, 1, 0 ],
		[ 0, 1, 1, 1, 1, 1, 1, 1 ],
		[ 1, 1, 0, 1, 1, 1, 1, 1 ]
	]
];
