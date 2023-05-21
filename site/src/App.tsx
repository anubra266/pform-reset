import { css, cx } from '../styled-system/css'
import { grid } from '../styled-system/patterns'

function App() {
  return (
    <div
      className={css({
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        px: '6',
        color: 'gray.900',
      })}
    >
      <div className={css({ maxW: { base: 'xl', md: '4xl' }, mx: 'auto', py: '12', divideY: true })}>
        <div className={css({ py: '8' })}>
          <h1 className={css({ fontSize: '4xl', fontWeight: 'bold' })}>pform-reset examples</h1>
          <p className={css({ mt: 2, fontSize: 'lg', color: 'gray.600' })}>
            An opinionated form reset designed to make form elements easy to style with utility classes.
          </p>
          <a
            className={css({ mt: 4, fontSize: 'lg', textDecoration: 'underline' })}
            href="https://github.com/anubra266/pform-reset}}"
          >
            Documentation
          </a>
        </div>

        <div className={css({ py: 12 })}>
          <h2 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Unstyled</h2>
          <p className={css({ mt: 2, fontSize: 'lg', color: 'gray.600' })}>
            This is how form elements look out of the box.
          </p>
          <div
            className={cx(
              grid({ columns: { base: 1, md: 2 } }),
              css({
                gap: 6,
                alignItems: 'start',
              }),
            )}
          >
            <div className={grid({ columns: 1, gap: 6 })}>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (text)</span>
                <input
                  type="text"
                  className={css({ mt: 1, display: 'block', w: 'full' })}
                  placeholder="john@example.com"
                />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (email)</span>
                <input
                  type="email"
                  className={css({ mt: 1, display: 'block', w: 'full' })}
                  placeholder="john@example.com"
                />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (email, multiple)</span>
                <input
                  type="email"
                  multiple
                  className={css({ mt: 1, display: 'block', w: 'full' })}
                  placeholder="john@example.com"
                />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (password)</span>
                <input
                  type="password"
                  className={css({ mt: 1, display: 'block', w: 'full' })}
                  placeholder="john@example.com"
                />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (date)</span>
                <input type="date" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (datetime-local)</span>
                <input type="datetime-local" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (month)</span>
                <input type="month" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (number)</span>
                <input type="number" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (search)</span>
                <input type="search" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (time)</span>
                <input type="time" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (week)</span>
                <input type="week" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
            </div>

            <div className={grid({ columns: 1, gap: 6 })}>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (tel)</span>
                <input
                  type="tel"
                  multiple
                  className={css({ mt: 1, display: 'block', w: 'full' })}
                  placeholder="john@example.com"
                />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (url)</span>
                <input
                  type="url"
                  multiple
                  className={css({ mt: 1, display: 'block', w: 'full' })}
                  placeholder="john@example.com"
                />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Select</span>
                <select className={css({ mt: 1, display: 'block', w: 'full' })}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Select (single, with size)</span>
                <select className={css({ mt: 1, display: 'block', w: 'full' })} size={3}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Select (multiple)</span>
                <select className={css({ mt: 1, display: 'block', w: 'full' })} multiple>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Select (multiple, with size)</span>
                <select className={css({ mt: 1, display: 'block', w: 'full' })} multiple size={3}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                  <option>Option 5</option>
                </select>
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Textarea</span>
                <textarea
                  className={css({ mt: 1, display: 'block', w: 'full', h: '24' })}
                  rows={3}
                  placeholder="Enter some long form content."
                ></textarea>
              </label>
              <fieldset className={css({ display: 'block' })}>
                <legend className={css({ color: 'gray.700' })}>Checkboxes</legend>
                <div className={css({ mt: 2 })}>
                  <div>
                    <label className={css({ display: 'inline-flex', alignItems: 'center' })}>
                      <input type="checkbox" defaultChecked />
                      <span className={css({ ml: 2 })}>Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label className={css({ display: 'inline-flex', alignItems: 'center' })}>
                      <input type="checkbox" />
                      <span className={css({ ml: 2 })}>Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label className={css({ display: 'inline-flex', alignItems: 'center' })}>
                      <input type="checkbox" />
                      <span className={css({ ml: 2 })}>Option 3</span>
                    </label>
                  </div>
                </div>
              </fieldset>
              <fieldset className={css({ display: 'block' })}>
                <legend className={css({ color: 'gray.700' })}>Radio Buttons</legend>
                <div className={css({ mt: 2 })}>
                  <div>
                    <label className={css({ display: 'inline-flex', alignItems: 'center' })}>
                      <input type="radio" defaultChecked name="radio-direct" value="1" />
                      <span className={css({ ml: 2 })}>Option 1</span>
                    </label>
                  </div>
                  <div>
                    <label className={css({ display: 'inline-flex', alignItems: 'center' })}>
                      <input type="radio" name="radio-direct" value="2" />
                      <span className={css({ ml: 2 })}>Option 2</span>
                    </label>
                  </div>
                  <div>
                    <label className={css({ display: 'inline-flex', alignItems: 'center' })}>
                      <input type="radio" name="radio-direct" value="3" />
                      <span className={css({ ml: 2 })}>Option 3</span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className={css({ py: 12 })}>
          <h2 className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Untouched</h2>
          <p className={css({ mt: 2, fontSize: 'lg', color: 'gray.600' })}>
            These are form elements we don't handle (yet?), but we use this to make sure we haven't accidentally styled
            them by mistake.
          </p>
          <div
            className={cx(
              grid({ columns: { base: 1, md: 2 } }),
              css({
                gap: 6,
                alignItems: 'start',
                mt: 8,
              }),
            )}
          >
            <div className={grid({ columns: 1, gap: 6 })}>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (range)</span>
                <input type="range" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (color)</span>
                <input type="color" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (file)</span>
                <input type="file" className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
              <label className={css({ display: 'block' })}>
                <span className={css({ color: 'gray.700' })}>Input (file, multiple)</span>
                <input type="file" multiple className={css({ mt: 1, display: 'block', w: 'full' })} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
