self.__uv$config = {
    prefix: '/static/tiw/',
    bare:'https://bare.benrogo.net',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/public/uv/uv.handler.js',
    bundle: '/public/uv/uv.bundle.js',
    config: '/public/uv/uv.config.js',
    sw: '/public/uv/uv.sw.js',
};
