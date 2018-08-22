module.exports = f => {
    f.tippecanoe = {
        minzoom: 2, 
        maxzoom: 5, 
        layer: f.properties.f_code
    }
    return f
  }