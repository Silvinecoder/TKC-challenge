#!/bin/bash
#
# Runs the mocha tests

set -e
scriptDir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

isSerial=false
isMeta=false

while getopts 'smh' opt 2>/dev/null; do
  case "$opt" in
    s) isSerial=true ;;
    h)
      echo "Usage: $0 [-s] [-m] [-h]" >&2
      echo "  -s      run tests in serial mode (default is parallel)" >&2
      echo "  -h      display this message" >&2
	    exit 1
      ;;
  esac
done

npmCommand="test"

if [ $isSerial = true ]; then
  shift
  npmCommand="test-serial"
fi


docker-compose exec worker npm run $npmCommand -- "$@"
