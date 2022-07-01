import React, { useState } from "react";
import { useNavigate } from "react-router";
import Tabs from './tabs';

export default function Create() {
  const [form, setForm] = useState({
    title: "",
    enable_web_output: "",
    repository: "The Sousa Archives and Center for American Music",
    classification: "",
    subclass: "",
    collection_identifier: "",
    sort_title: "",
    normal_date_start: "",
    normal_date_end: "",
    inclusive_date: "",
    predominant_date: "",
    material_type: "",
    extent: "",
    extent_unit: "",
    finding_aid_author: "",
    creators: "",
    primary_creator: "",
    abstract: "",
    scope: "",
    arrangement: "",
    alt_extent_stmt: "",
    biographical_historical_note: "",
    biographical_historical_author: "",
    subjects: "",
    languages: "",
    initial_date_acquired: "",
    source: "",
    method: "",
    appraisal_info: "",
    accruals_additions: "",
    custodial_history: "",
    access_general: "",
    use_rights: "",
    physical: "",
    technical: "",
    other_url: "",
    other_note: "",
    books: "",
    related_materials: "",
    related_materials_url: "",
    related_publications: "",
    separated_materials: "",
    original_copy_note: "",
    original_copy_url: "",
    preferred_citation: "",
    rules_used: "",
    processing_info: "",
    revision_history: "",
    publication_date: "",
    publication_note: "",
    written_in: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };

    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });

    setForm({ 
      title: "",
      enable_web_output: "",
      repository: "The Sousa Archives and Center for American Music",
      classification: "",
      subclass: "",
      collection_identifier: "",
      sort_title: "",
      normal_date_start: "",
      normal_date_end: "",
      inclusive_date: "",
      predominant_date: "",
      material_type: "",
      extent: "",
      extent_unit: "",
      finding_aid_author: "",
      creators: "",
      primary_creator: "",
      abstract: "",
      scope: "",
      arrangement: "",
      alt_extent_stmt: "",
      biographical_historical_note: "",
      biographical_historical_author: "",
      subjects: "",
      languages: "",
      initial_date_acquired: "",
      source: "",
      method: "",
      appraisal_info: "",
      accruals_additions: "",
      custodial_history: "",
      access_general: "",
      use_rights: "",
      physical: "",
      technical: "",
      other_url: "",
      other_note: "",
      books: "",
      related_materials: "",
      related_materials_url: "",
      related_publications: "",
      separated_materials: "",
      original_copy_note: "",
      original_copy_url: "",
      preferred_citation: "",
      rules_used: "",
      processing_info: "",
      revision_history: "",
      publication_date: "",
      publication_note: "",
      written_in: "",
    });//, position: "", level: "" });
    navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Record</h3>
      <form name="form" id="form" onSubmit={onSubmit}>
        <Tabs>
          <div label="General">
            <div className="form-group m-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control m-2"
                id="title"
                value={form.title}
                onChange={(e) => updateForm({ title: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="enable_web_output">Enable Web Output</label>
              <div>
                <input
                  type="radio"
                  className="m-2"
                  id="enable_web_output"
                  value="Yes"
                  name="enable_web_output"
                  onChange={(e) => updateForm({ enable_web_output: e.target.value })}
                /> Yes
                <input
                  type="radio"
                  className="m-2"
                  id="enable_web_output"
                  value="No"
                  name="enable_web_output"
                  onChange={(e) => updateForm({ enable_web_output: e.target.value })}
                /> No
              </div>
            </div>
            <div className="form-group m-2">
              <label htmlFor="repository">Repository</label> {/** make this grab from a global var*/}
              <input
                type="text"
                className="form-control m-2"
                id="repository"
                value="The Sousa Archives and Center for American Music"
                onChange={(e) => updateForm({ repository: e.target.value })}
                readOnly
              />
            </div>
            <div id="record_series" className="row">
              <div className="form-group m-2 col"> 
                <label htmlFor="classification">Classification</label>
                <input
                  type="number"
                  className="form-control m-2"
                  id="classification"
                  value={form.classification}
                  onChange={(e) => updateForm({ classification: e.target.value })}
                />
              </div>
              <div className="form-group m-2 col">
                <label htmlFor="subclass">Subclass</label>
                <input
                  type="number"
                  className="form-control m-2"
                  id="subclass"
                  value={form.subclass}
                  onChange={(e) => updateForm({ subclass: e.target.value })}
                />
              </div>
              <div className="form-group m-2 col">
                <label htmlFor="collection_identifier">Collection Identifier</label>
                <input
                  type="number"
                  className="form-control m-2"
                  id="collection_identifier"
                  value={form.collection_identifier}
                  onChange={(e) => updateForm({ collection_identifier: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group m-2">
              <label htmlFor="sort_title">Sort Title</label>
              <input
                type="text"
                className="form-control m-2"
                id="sort_title"
                value={form.sort_title}
                onChange={(e) => updateForm({ sort_title: e.target.value })}
              />
            </div>
            <div className="row form-group m-2">
              <label htmlFor="normal_date_start">Normal Date</label>
              <input
                type="text"
                className="col form-control m-2"
                id="normal_date_start"
                value={form.normal_date_start}
                onChange={(e) => updateForm({ normal_date_start: e.target.value })}
              /> _
              <input
                type="text"
                className="col form-control m-2"
                id="normal_date_end"
                value={form.normal_date_end}
                onChange={(e) => updateForm({ normal_date_end: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="inclusive_date">Inclusive Date</label>
              <input
                type="text"
                className="form-control m-2"
                id="inclusive_date"
                value={form.inclusive_date}
                onChange={(e) => updateForm({ inclusive_date: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="predominant_date">Predominant Date</label>
              <input
                type="text"
                className="form-control m-2"
                id="predominant_date"
                value={form.predominant_date}
                onChange={(e) => updateForm({ predominant_date: e.target.value })}
              />
            </div>
            <div className="m-2">
            <label htmlFor="material_type">Material Type</label>
              <div>
                <select onChange={(e) => updateForm({ material_type: e.target.value })} value={form.material_type} className="form-select m-2" form="form" name="material_type" id="material_type">
                  <option selected={form.material_type === ""} value="">(Select One)</option>
                  <option selected={form.material_type === "Official Records"} value="Official Records">Official Records</option>
                  <option selected={form.material_type === "Official Records: Non-University"} value="Official Records: Non-University">Official Records: Non-University</option>
                  <option selected={form.material_type === "Personal Papers"} value="Personal Papers">Personal Papers</option>
                  <option selected={form.material_type === "Personal Papers: Non-University"} value="Personal Papers: Non-University">Personal Papers: Non-University</option>
                  <option selected={form.material_type === "Publications"} value="Publications">Publications</option>
                </select>
              </div>
            </div>
            <div className="m-2">
            <label htmlFor="extent">Extent</label>
              <div className="row">
                <input
                  type="number"
                  step="0.01"
                  min="0.00"
                  placeholder="0.00"
                  className="col form-group m-2"
                  id="extent"
                  value={form.extent}
                  onChange={(e) => updateForm({ extent: e.target.value })}
                />
                <select onChange={(e) => updateForm({ extent_unit: e.target.value })} className="col form-select m-2" form="form" name="extent_unit" id="extent_unit">
                  <option selected={form.extent_unit === ""} value="">(Select One)</option>
                  <option selected={form.extent_unit === "cubic feet"}value="cubic feet">cubic feet</option>
                  <option selected={form.extent_unit === "megabytes"}value="megabytes">megabytes</option>
                </select>
              </div>
            </div>
            <div className="form-group m-2">
              <label htmlFor="finding_aid_author">Finding Aid Author</label>
              <input
                type="text"
                className="form-control m-2"
                id="finding_aid_author"
                value={form.finding_aid_author}
                onChange={(e) => updateForm({ finding_aid_author: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="creators">Creator(s)</label>
              <input
                type="text"
                className="form-control m-2"
                id="creators"
                value={form.creators}
                onChange={(e) => updateForm({ creators: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="primary_creator">Primary Creator</label>
              <input
                type="text"
                className="form-control m-2"
                id="primary_creator"
                value={form.primary_creator}
                onChange={(e) => updateForm({ primary_creator: e.target.value })}
              />
            </div>
            
          </div>
          <div label="Description">
            <div className="form-group m-2">
              <label htmlFor="abstract">Abstract</label>
              <input
                type="text"
                className="form-control m-2"
                id="abstract"
                value={form.abstract}
                onChange={(e) => updateForm({ abstract: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="scope">Scope</label>
              <input
                type="text"
                className="form-control m-2"
                id="scope"
                value={form.scope}
                onChange={(e) => updateForm({ scope: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="arrangement">Arrangement</label>
              <input
                type="text"
                className="form-control m-2"
                id="arrangement"
                value={form.arrangement}
                onChange={(e) => updateForm({ arrangement: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="alt_extent_stmt">Alt Extent Stmt</label>
              <input
                type="text"
                className="form-control m-2"
                id="alt_extent_stmt"
                value={form.alt_extent_stmt}
                onChange={(e) => updateForm({ alt_extent_stmt: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="biographical_historical_note">Biographical/Historical Note</label>
              <input
                type="text"
                className="form-control m-2"
                id="biographical_historical_note"
                value={form.biographical_historical_note}
                onChange={(e) => updateForm({ biographical_historical_note: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="biographical_historical_author">Biographical/Historical Author</label>
              <input
                type="text"
                className="form-control m-2"
                id="biographical_historical_author"
                value={form.biographical_historical_author}
                onChange={(e) => updateForm({ biographical_historical_author: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="subjects">Subjects</label>
              <input
                type="text"
                className="form-control m-2"
                id="subjects"
                value={form.subjects}
                onChange={(e) => updateForm({ subjects: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="languages">Languages</label>
              <input
                type="text"
                className="form-control m-2"
                id="languages"
                value={form.languages}
                onChange={(e) => updateForm({ languages: e.target.value })}
              />
            </div>
            
          </div>
          <div label="Locations">
            Location content coming soon!
          </div>
          <div label="Acquisitions">
            <div className="form-group m-2">
              <label htmlFor="initial_date_acquired">Initial Date Acquired</label>
              <input
                type="text"
                className="form-control m-2"
                id="initial_date_acquired"
                value={form.initial_date_acquired}
                onChange={(e) => updateForm({ initial_date_acquired: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="source">Source</label>
              <input
                type="text"
                className="form-control m-2"
                id="source"
                value={form.source}
                onChange={(e) => updateForm({ source: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="method">Method</label>
              <input
                type="text"
                className="form-control m-2"
                id="method"
                value={form.method}
                onChange={(e) => updateForm({ method: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="appraisal_info">Appraisal Info</label>
              <input
                type="text"
                className="form-control m-2"
                id="appraisal_info"
                value={form.appraisal_info}
                onChange={(e) => updateForm({ appraisal_info: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="accruals_additions">Accruals/Additions</label>
              <input
                type="text"
                className="form-control m-2"
                id="accruals_additions"
                value={form.accruals_additions}
                onChange={(e) => updateForm({ accruals_additions: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="custodial_history">Custodial History</label>
              <input
                type="text"
                className="form-control m-2"
                id="custodial_history"
                value={form.custodial_history}
                onChange={(e) => updateForm({ custodial_history: e.target.value })}
              />
            </div>
          </div>
          <div label="Restrictions">
            <div className="form-group m-2">
              <label htmlFor="access_general">Access/General</label>
              <input
                type="text"
                className="form-control m-2"
                id="access_general"
                value={form.access_general}
                onChange={(e) => updateForm({ access_general: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="use_rights">Use/Rights</label>
              <input
                type="text"
                className="form-control m-2"
                id="use_rights"
                value={form.use_rights}
                onChange={(e) => updateForm({ use_rights: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="physical">Physical</label>
              <input
                type="text"
                className="form-control m-2"
                id="physical"
                value={form.physical}
                onChange={(e) => updateForm({ physical: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="technical">Technical</label>
              <input
                type="text"
                className="form-control m-2"
                id="technical"
                value={form.technical}
                onChange={(e) => updateForm({ technical: e.target.value })}
              />
            </div>
          </div>
          <div label="Other Info">
            <div className="form-group m-2">
              <label htmlFor="other_url">Other URL</label>
              <input
                type="text"
                className="form-control m-2"
                id="other_url"
                value={form.other_url}
                onChange={(e) => updateForm({ other_url: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="other_note">Other Note</label>
              <input
                type="text"
                className="form-control m-2"
                id="other_note"
                value={form.other_note}
                onChange={(e) => updateForm({ other_note: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="books">Books</label>
              <input
                type="text"
                className="form-control m-2"
                id="books"
                value={form.books}
                onChange={(e) => updateForm({ books: e.target.value })}
              />
            </div>
          </div>
          <div label="Related Materials">
            <div className="form-group m-2">
              <label htmlFor="related_materials">Related Materials</label>
              <input
                type="text"
                className="form-control m-2"
                id="related_materials"
                value={form.related_materials}
                onChange={(e) => updateForm({ related_materials: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="related_materials_url">Related Materials URL</label>
              <input
                type="text"
                className="form-control m-2"
                id="related_materials_url"
                value={form.related_materials_url}
                onChange={(e) => updateForm({ related_materials_url: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="related_publications">Related Publications</label>
              <input
                type="text"
                className="form-control m-2"
                id="related_publications"
                value={form.related_publications}
                onChange={(e) => updateForm({ related_publications: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="separated_materials">Separated Materials</label>
              <input
                type="text"
                className="form-control m-2"
                id="separated_materials"
                value={form.separated_materials}
                onChange={(e) => updateForm({ separated_materials: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="original_copy_note">Original/Copy Note</label>
              <input
                type="text"
                className="form-control m-2"
                id="original_copy_note"
                value={form.original_copy_note}
                onChange={(e) => updateForm({ original_copy_note: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="original_copy_url">Original/Copy URL</label>
              <input
                type="text"
                className="form-control m-2"
                id="original_copy_url"
                value={form.original_copy_url}
                onChange={(e) => updateForm({ original_copy_url: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="preferred_citation">Preferred Citation</label>
              <input
                type="text"
                className="form-control m-2"
                id="preferred_citation"
                value={form.preferred_citation}
                onChange={(e) => updateForm({ preferred_citation: e.target.value })}
              />
            </div>
          </div>
          <div label="Finding Aid Info">
            <div className="m-2">
              <label htmlFor="rules_used">Material Type</label>
              <div>
                <select onChange={(e) => updateForm({ rules_used: e.target.value })} value={form.rules_used} className="form-select m-2" form="form" name="rules_used" id="rules_used">
                  <option selected={form.rules_used === ""} value="">(Select One)</option>
                  <option selected={form.rules_used === "Anglo-American Cataloging Rules, 2nd Edition"} value="Anglo-American Cataloging Rules, 2nd Edition">Anglo-American Cataloging Rules, 2nd Edition</option>
                  <option selected={form.rules_used === "Describing Archives: A Content Standard"} value="Describing Archives: A Content Standard">Describing Archives: A Content Standard</option>
                  <option selected={form.rules_used === "General International Standard for Archival Description"} value="General International Standard for Archival Description">General International Standard for Archival Description</option>
                  <option selected={form.rules_used === "Rules for Archival Description"} value="Rules for Archival Description">Rules for Archival Description</option>
                </select>
              </div>
            </div>
            <div className="form-group m-2">
              <label htmlFor="processing_info">Processing Info</label>
              <input
                type="text"
                className="form-control m-2"
                id="processing_info"
                value={form.processing_info}
                onChange={(e) => updateForm({ processing_info: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="revision_history">Revision History</label>
              <input
                type="text"
                className="form-control m-2"
                id="revision_history"
                value={form.revision_history}
                onChange={(e) => updateForm({ revision_history: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="publication_date">Publication Date</label>
              <input
                type="text"
                className="form-control m-2"
                id="publication_date"
                value={form.publication_date}
                onChange={(e) => updateForm({ publication_date: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="publication_note">Publication Note</label>
              <input
                type="text"
                className="form-control m-2"
                id="publication_note"
                value={form.publication_note}
                onChange={(e) => updateForm({ publication_note: e.target.value })}
              />
            </div>
            <div className="form-group m-2">
              <label htmlFor="written_in">Written In</label>
              <input
                type="text"
                className="form-control m-2"
                id="written_in"
                value={form.written_in}
                onChange={(e) => updateForm({ written_in: e.target.value })}
              />
            </div>
          </div>
          <div label="Save">
            <div className="form-group">
              <input
                type="submit"
                value="Create record"
                className="btn btn-primary"
              />
            </div>
          </div>          
        </Tabs>
      </form>
    </div>
  );
}
